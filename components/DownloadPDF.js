import { tinaField } from "tinacms/dist/react";
import { useState } from "react";
import globalValues from "@/content/globals/global-values.json";

export const DownloadPDF = ({ downloads }) => {
  const [pdfToShow, setPdfToShow] = useState(downloads[0].pdf);

  return (
    <>
      <div className="pad-bottom-700 split-pair">
        <h3>Download in</h3>
        <div className="display-flex flex-wrap-wrap justify-content-flex-start row-gap-05-rem">
          {downloads.map((download) => {
            return (
              download.language &&
              download.pdf && (
                <h3 key={download.language}>
                  <a
                    className="link-pointer-gold"
                    data-tina-field={tinaField(download)}
                    onClick={() => setPdfToShow(download.pdf)}
                  >
                    {
                      globalValues.languages.find(
                        (language) => language.value === download.language
                      ).label
                    }
                  </a>
                </h3>
              )
            );
          })}
        </div>
      </div>
      <iframe
        title="Resource PDF"
        src={pdfToShow + "#view=fit&navpanes=0"}
        style={{ width: "100%", height: "100vh" }}
        onLoad={function () {
          this.document.getElementsByTagName("img")[0].style.width = "100%";
        }}
      />
    </>
  );
};
