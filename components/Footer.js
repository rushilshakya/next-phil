import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-canvas">
      <div
        className="[ index-blurb flow ] [ pad-top-1000 pad-right-500 pad-bottom-1000 pad-left-500 ] [ wrapper ta-center ]"
        data-variant="narrow"
      >
        <p className="text-500 weight-bold">
          AAF's Mental Health Hub was made possible with contributions from the
          Asian American Mental Health Roundtable and the support of
        </p>
        <div>
          <img
            src="/img/logo/MotherCabriniLogo.png"
            style={{
              maxWidth: "70%",
            }}
          />
        </div>
        <span>
          Disclaimer: The materials available on AAF's Mental Health Hub website
          are for informational purposes only and are not intended to replace
          professional advice, diagnosis, or treatment. Always seek the advice
          of your therapist or other qualified health provider with any
          questions you may have regarding a mental health condition.
        </span>
      </div>
      <div className="bg-dark gap-top-300 pad-top-500 pad-bottom-500">
        <div className="wrapper footer-tiles">
          <div className="pad-left-300 pad-right-300 pad-top-300 pad-bottom-300">
            <Image
              width={335.906}
              height={47.578}
              src="/img/logo/AAF-Logo-White.svg"
              className="image gap-left-0 pad-bottom-500"
              alt=""
              loading="lazy"
            />
            <p className="color-slate">
              The Asian American Federation’s mission is to raise the influence
              and well-being of the pan-Asian American community through
              research, policy advocacy, public awareness and organizational
              development.
            </p>
          </div>
          <div className="pad-left-300 pad-right-300 pad-top-400 pad-bottom-300">
            <p className="color-slate">120 Wall Street, 9th Floor</p>
            <p className="color-slate">New York, NY 10005</p>
          </div>
          <div className="pad-left-300 pad-right-300 pad-top-1000">
            <p className="color-slate">© 2022 Asian American Federation</p>
          </div>
        </div>
      </div>
    </div>
  );
};
