import { Fragment } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterBanner from "./FooterBanner";
import MarqueeTag from "./MarqueeTag";

/**
 * Reusable work-term report layout.
 *
 * Props
 *  - logo, companyName, companyUrl : linked company logo at the top
 *  - title                         : page title
 *  - intro                         : one paragraph string (include role, company and dates)
 *  - sections                      : ordered list, rendered top to bottom. Each item:
 *                                    { id?, group?, title, tagline?, content?, tools? }
 *                                    - group   = sections with the same consecutive group value
 *                                                share one background band (ungrouped = own band)
 *                                    - content = string | string[] | JSX
 *                                    - tools   = string[]  (rendered as one muted line;
 *                                                use this for "Tools & methods")
 *  - acknowledgments               : string | string[] | JSX  (added as the last section)
 *  - topId                         : id of the page-top anchor; the Footer scrolls to it (default "reportTop")
 *  - showFooterBanner              : boolean (default true)
 *
 * Groups alternate between a full-width tinted band (bg-jicama) and the page
 * background, starting with tinted, with a MarqueeTag between each pair of groups. The header/intro sits in the first group;
 * acknowledgments is its own last group, together with the footer banner.
 */

// Horizontal padding that never goes below the normal gutter, but grows to clear
// the notch / home indicator on iPhones in landscape (needs viewport-fit=cover to take effect).
const SAFE_PADDING =
  "pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] " +
  "md:pl-[max(2.5rem,env(safe-area-inset-left))] md:pr-[max(2.5rem,env(safe-area-inset-right))]";

const Prose = ({ children }) => {
  if (children == null) return null;
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      {items.map((item, i) =>
        typeof item === "string" ? (
          <p key={i}>{item}</p>
        ) : (
          <div key={i}>{item}</div>
        ),
      )}
    </div>
  );
};

const SectionHeading = ({ id, tagline, children }) => (
  <div className="mb-5">
    <h2
      id={id}
      className="font-syncopate text-xl font-bold uppercase text-midnight"
    >
      {children}
    </h2>
    {tagline && (
      <p className="mt-2 text-base italic text-midnight/60 md:text-lg">{tagline}</p>
    )}
  </div>
);

const ExternalArrow = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const CompanyLogoLink = ({ logo, companyName, companyUrl }) => {
  const image = (
    <img
      src={logo}
      alt={`${companyName} logo`}
      className="h-24 w-24 rounded-2xl object-cover"
    />
  );

  // No URL -> plain logo, no link affordance
  if (!companyUrl) return image;

  return (
    <a
      href={companyUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${companyName} website (opens in new tab)`}
      className="shadow-md group relative rounded-2xl transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-midnight"
    >
      {image}

      {/* Always-visible indicator: corner badge */}
      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-midnight text-moon shadow">
        <ExternalArrow className="h-3 w-3" />
      </span>

      {/* Hover / focus caption */}
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-manrope text-xs text-midnight/70 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        Visit website
      </span>
    </a>
  );
};

const Report = ({
  logo,
  companyName,
  companyUrl,
  title,
  intro,
  sections = [],
  acknowledgments,
  topId = "reportTop",
  showFooterBanner = true,
}) => {
  // Acknowledgments is the final group.
  const allSections = acknowledgments
    ? [
        ...sections,
        {
          id: "acknowledgments",
          group: "__ack",
          title: "Acknowledgments",
          content: acknowledgments,
        },
      ]
    : sections;

  // Merge consecutive sections that share a `group` value into one band.
  const groups = [];
  allSections.forEach((section) => {
    const last = groups[groups.length - 1];
    if (last && section.group !== undefined && last.key === section.group) {
      last.items.push(section);
    } else {
      groups.push({ key: section.group, items: [section] });
    }
  });
  if (groups.length === 0) groups.push({ key: "__empty", items: [] });

  const header = (
    <header>
      <div className="flex flex-col items-center text-center">
        {logo && (
          <CompanyLogoLink
            logo={logo}
            companyName={companyName}
            companyUrl={companyUrl}
          />
        )}

        <h1 className="mt-10 font-syncopate text-2xl font-bold uppercase text-midnight md:text-3xl">
          {title}
        </h1>
      </div>

      {intro && <p className="mt-12 text-gray-700 leading-relaxed">{intro}</p>}
    </header>
  );

  return (
    // text-left keeps text left-aligned even if a parent (e.g. CRA's .App) centers text
    <div id={topId} className="min-h-screen text-left font-manrope">
      <Navbar />

      {groups.map((group, gi) => {
        const isFirst = gi === 0;
        const isLast = gi === groups.length - 1;

        return (
          <Fragment key={`${group.key}-${gi}`}>
            {/* Marquee between groups */}
            {!isFirst && <MarqueeTag />}

            <div className={gi % 2 === 0 ? "bg-jicama" : ""}>
              <div
                className={`mx-auto max-w-3xl space-y-16 ${SAFE_PADDING} ${
                  isFirst ? "pb-16 pt-28" : "py-16"
                }`}
              >
                {isFirst && header}

                {group.items.map(
                  ({ id, title: sectionTitle, tagline, content, tools }) => (
                    <section key={id ?? sectionTitle}>
                      <SectionHeading id={id} tagline={tagline}>
                        {sectionTitle}
                      </SectionHeading>

                      {tools && tools.length > 0 && (
                        <p className="text-gray-700">{tools.join(" · ")}</p>
                      )}
                      <Prose>{content}</Prose>
                    </section>
                  ),
                )}
              </div>

              {/* Footer banner belongs to the last group's band */}
              {isLast && showFooterBanner && <FooterBanner />}
            </div>
          </Fragment>
        );
      })}

      <Footer topRef={`#${topId}`} />
    </div>
  );
};

export default Report;