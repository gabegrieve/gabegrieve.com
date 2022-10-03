import Github from "../public/icons/github.svg";
import Copy from "../public/icons/copy.svg";

const copyText = (event) => {
  event.preventDefault;
  let text = document.querySelector("#copyable-text").innerHTML;
  let buttonText = document.querySelector("#inner-text");
  let originalText = buttonText.innerHTML;
  navigator.clipboard.writeText(text);
  buttonText.innerHTML = "Copied!";
  setTimeout(() => {
    buttonText.innerHTML = originalText;
  }, 2000);
};

export default function GitHubRepo() {
  return (
    <>
      <div className="xl:1/3 my-4 w-full rounded-lg bg-white p-4 text-black-blue lg:w-1/2">
        <header className="flex items-center">
          <div className="svg-control w-8">
            <Github />
          </div>
          <h5 className="heading-two ml-4">GabeGrieve</h5>
        </header>
        <main className="mt-4">
          <div className="relative rounded-md bg-off-white p-3">
            <span className="text-light-blue" id="copyable-text">
              https://github.com/gabegrieve/gabegrieve.com.git
            </span>
            <div className="absolute right-0 top-0 m-2">
              <button
                className="easy-transition flex items-center rounded-full bg-black-blue py-2 px-4 text-sm text-white hover:bg-dull-blue"
                onClick={copyText}
              >
                <span className="mr-2" id="inner-text">
                  Copy link
                </span>
                <div className="svg-control w-4">
                  <Copy />
                </div>
              </button>
            </div>
          </div>
          <p className="mt-4 text-dull-blue">
            It's mainly{" "}
            <a
              className="underline"
              target={"_blank"}
              href="https://nextjs.org"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              className="underline"
              target={"_blank"}
              href="https://tailwindcss.com"
            >
              TailwindCSS
            </a>{" "}
            - two web technologies that made my life better.
          </p>
        </main>
      </div>
    </>
  );
}
