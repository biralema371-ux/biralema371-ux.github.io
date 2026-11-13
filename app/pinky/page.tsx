"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pinky() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<"" | "yes" | "no" | "invalid">("");

  function send() {
    const value = text.trim().toLowerCase();
    if (value === "yes" || value === "አዎ") {
      setResult("yes");
    } else if (value === "no" || value === "አይ") {
      setResult("no");
    } else {
      setResult("invalid");
    }
  }

  return (
    <main className="stage">
      <img src="/pinky-photo.jpg" alt="" />
      <video
        src="/apology.mp4"
        poster="/pinky-photo.jpg"
        controls
        playsInline
        preload="metadata"
      />

      <div className="stage-ui">
        <h1>SORRY🤍</h1>
        <p className="caption">
          Let&apos;s make peace for my mind...
          <br />
          I am truly sorry from my heart. Let&apos;s make peace with our little fingers.
        </p>

        <div className="answer-box">
          <p className="answer-label">Pinky promise 🤙</p>
          <p className="answer-hint">
             to talk like before...If your answer is yes, type <b>yes</b>. If not, type <b>no</b>.
            <br />
            መልስሽ አዎ ከሆነ <b>yes</b> ብለሽ ጻፊ፤ አይደለም ከሆነ <b>no</b> ብለሽ ጻፊ።
          </p>

          <div className="answer-row">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") send();
              }}
              placeholder="yes / no"
            />
            <button className="btn" onClick={send}>Send · ላክ</button>
          </div>

          {result === "yes" && (
            <p className="answer-msg">ok!i am happy for you agree with me 💙 ·Drear best friend  </p>
          )}
          {result === "no" && (
            <p className="answer-msg">That&apos;s okay, take your time. I&apos;m always here 💙 · ችግር የለም፣ ጊዜ ውሰጂ።</p>
          )}
          {result === "invalid" && (
            <p className="answer-msg">Please type only yes or no. · እባክሽ yes ወይም no ብቻ ጻፊ።</p>
          )}
        </div>

        <div>
          <Link href="/" className="back">← Back · return in to the back
          </Link>
        </div>
      </div>
    </main>
  );
}