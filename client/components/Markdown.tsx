"use client";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { FC } from "react";
import rehypeKatex from "rehype-katex";

interface MarkdownProps {
  markdown: string;
}

export const Markdown: FC<MarkdownProps> = ({ markdown }) => {
  return (
    <ReactMarkdown
      children={markdown}
      rehypePlugins={[rehypeKatex]}
      remarkPlugins={[gfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, "")}
              style={atomDark}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};
