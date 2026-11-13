"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PARAGRAPHS = [
  "እውነት አንቺ ምን ያህል እየደበረኝ እንዳለ አታቂም እውነት። አንዳንድ ሰው ታውቂያለሽ በህይወታች ውስጥ መጥተው ተራ ትዝታ ብቻ አይተዉም፤ በልባችን ውስጥ ልዩ ቦታ ይይዛሉ። አንቺም ደሞ ሁሉንም ነገር ማወራሽ ሁሉንም ነገር ምታወሪኝ ሲደብርሽ ምታወሪኝ ማወራሽ ከማንም በላይ ጓደኛዬ ነሽ ከእነዚያ ሰዎች አንዷ ነሽ። አንቺ የቅርብ ጓደኛዬ ብቻ ሳትሆኚ ደስታዬን የምጋራሽ፣ ችግሬን የማካፍልሽ እና በቀላሉ እራሴን መሆን የምችልብሽ ሰው ነበርሽ።",
  "ዛሬ በመካከላችን ያለው ርቀት ሲታየኝ የሚሰማኝን ሀዘን መግለጽ አልችልም። ምናልባት በተናገርኩት ነገር፣ በሠራሁት ተግባር ወይም በማላስተውለው ስህተት አስከፍቼሽ ይሆናል፤ ለዚያም ከልቤ ይቅርታ እጠይቅሻለሁ። ይቅር ብለሽኛል ብትይም ከልብሽ እንዳልሆነ ይሰማኛል፣ እኔም ይህ ነገር በጣም ያሳዝነኛል።",
  "ልብሽን ለማስገደድ አይደለም የምፈልገው፤ ከልብሽ እንድትረጂኝ እና የነበረን ወዳጅነት እንደገና እንድንመልስ ነው የምመኘው። ስህተቴን ለመካድ ወይም ያለፈውን ለመርሳት አይደለም የምጽፍልሽ፤ የምጽፍልሽ የነበረን ወዳጅነት ከልቤ ስለምናፍቅ እና እንደገና ለመገንባት ስለምፈልግ ነው። ሁሉም ነገር እንደቀድሞው ወዲያውኑ እንዲሆን አልጠብቅም፤ ግን እንደገና እንድንነጋገር፣ እርስ በርሳችን እንድንሰማ እና የተበላሸውን ነገር በትዕግሥት እንድናስተካክል እመኛለሁ።",
  "ሰዎች በህይወታቸው ብዙ ጓደኞችን ሊያገኙ ይችላሉ፣ ግን ከልብ የቀረቡ ሰዎችን መተካት ሁልጊዜ ቀላል አይደለም። ለእኔ አንቺ እንዲህ ያለ ሰው ነሽ። እባክሽ የይቅርታ ጥያቄዬን በጥሩ ልብ እንድትመለከቺው እመኛለሁ። እንደገና ጓደኛሽ ለመሆን እድል ብትሰጪኝ በጣም ደስ ይለኛል። ያለፈውን ሁሉ መርሳት ባንችልም ከዚያ ተምረን አዲስ ገጽ መክፈት እንችላለን።",
  "ይቅርታ ጓደኛዬ፤ ወዳጅነታችን ለእኔ ዋጋ አለው፣ አንቺም ሁሌም በመልካም ትዝታ የምታስታውሺኝ ሰው እንድሆን እፈልጋለሁ።",
];

export default function Home() {
  const [stage, setStage] = useState<"cover" | "leaving" | "letter">("cover");

  useEffect(() => {
    const t1 = setTimeout(() => setStage("leaving"), 2000);
    const t2 = setTimeout(() => setStage("letter"), 2700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {stage === "letter" ? (
        <>
          <img className="photo-full" src="/letter-bg.jpg" alt="" />
          <div className="photo-tint" />
        </>
      ) : (
        <div className="bg" />
      )}

      <div className="snow" />

      {stage !== "letter" ? (
        <main className="cover">
          <div className={stage === "leaving" ? "cover-card leaving" : "cover-card"}>
            <p className="small">For kalkidan Engedawork</p>
            <h1>Dear Best friend</h1>
            <p className="sub">this message is for …</p>
          </div>
        </main>
      ) : (
        <main className="letter-wrap">
          <article className="letter plain">
            <h1 className="reveal">Dear Best Friend</h1>

            {PARAGRAPHS.map((text, i) => (
              <p key={i} className="reveal" style={{ animationDelay: (i + 1) * 0.4 + "s" }}>
                {text}
              </p>
            ))}

            <p className="sign reveal" style={{ animationDelay: (PARAGRAPHS.length + 1) * 0.4 + "s" }}>
              from Bira 💙
            </p>

            <div className="next reveal" style={{ animationDelay: (PARAGRAPHS.length + 2) * 0.4 + "s" }}>
              <Link href="/pinky" className="btn">for your agreement touch this →</Link>
            </div>
          </article>
        </main>
      )}
    </>
  );
}