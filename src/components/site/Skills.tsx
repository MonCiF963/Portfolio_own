import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/lib/i18n";

// Official brand marks bundled locally so they always load in real colors.
import reactLogo from "@/assets/tools/react-original.svg";
import typescriptLogo from "@/assets/tools/typescript-original.svg";
import javascriptLogo from "@/assets/tools/javascript-original.svg";
import htmlLogo from "@/assets/tools/html5-original.svg";
import cssLogo from "@/assets/tools/css3-original.svg";
import tailwindLogo from "@/assets/tools/tailwindcss-original.svg";
import nextLogo from "@/assets/tools/nextjs-original.svg";
import supabaseLogo from "@/assets/tools/supabase-original.svg";
import gitLogo from "@/assets/tools/git-original.svg";
import figmaLogo from "@/assets/tools/figma-original.svg";
import photoshopLogo from "@/assets/tools/photoshop-original.svg";
import premiereLogo from "@/assets/tools/premierepro-original.svg";
import afterEffectsLogo from "@/assets/tools/aftereffects-original.svg";
import davinciLogo from "@/assets/tools/davinciresolve.svg";

type Tool = { name: string; src: string };

const webStack: Tool[] = [
  { name: "React", src: reactLogo },
  { name: "TypeScript", src: typescriptLogo },
  { name: "JavaScript", src: javascriptLogo },
  { name: "HTML5", src: htmlLogo },
  { name: "CSS3", src: cssLogo },
  { name: "Tailwind CSS", src: tailwindLogo },
  { name: "Next.js", src: nextLogo },
  { name: "Supabase", src: supabaseLogo },
  { name: "Git", src: gitLogo },
  { name: "Figma", src: figmaLogo },
];

const creativeStack: Tool[] = [
  { name: "Adobe Photoshop", src: photoshopLogo },
  { name: "Adobe Premiere Pro", src: premiereLogo },
  { name: "Adobe After Effects", src: afterEffectsLogo },
  { name: "DaVinci Resolve", src: davinciLogo },
];

function LogoTile({ tool }: { tool: Tool }) {
  return (
    <li className="group flex flex-col items-center gap-3 text-center">
      <span className="grid h-16 w-full place-items-center rounded-sm border border-white/[0.07] bg-white/[0.02] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-acc-green/40 group-hover:bg-white/[0.05]">
        <img
          src={tool.src}
          alt={`${tool.name} logo`}
          loading="lazy"
          width={30}
          height={30}
          className="h-[30px] w-[30px] transition-transform duration-300 group-hover:scale-110"
        />
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground transition-colors group-hover:text-foreground">
        {tool.name}
      </span>
    </li>
  );
}

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={t("skills.eyebrow")} title={t("skills.title")} className="mb-10" />

        <div className="grid gap-4 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[1.5rem] border border-white/[0.07] bg-card/30 p-7 md:col-span-7 md:p-9"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-acc-green" />
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-acc-green">
                {t("skills.web")}
              </h3>
            </div>
            <ul className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-5">
              {webStack.map((tool) => (
                <LogoTile key={tool.name} tool={tool} />
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[1.5rem] border border-acc-purple/20 bg-acc-purple/[0.05] p-7 md:col-span-5 md:p-9"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-acc-purple" />
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-acc-purple">
                {t("skills.video")}
              </h3>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {creativeStack.map((tool) => (
                <LogoTile key={tool.name} tool={tool} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
