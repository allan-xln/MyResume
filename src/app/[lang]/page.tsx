import { ResumePage } from "@/components/ResumePage";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "pt" | "en" }>;
}) {
  const { lang } = await params;

  return <ResumePage lang={lang} />;
}
