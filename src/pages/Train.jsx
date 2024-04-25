export default function Train() {
  return (
    <>
      <h1>SMRT - Train Line in Singapore</h1>
      <img
        src="https://www.lta.gov.sg/content/dam/ltagov/getting_around/public_transport/rail_network/pdf/tel3_sm-en.png"
        height="500px"
      />
      <iframe
        src="https://trainarrivalweb.smrt.com.sg/"
        height="300px"
      ></iframe>
      <p>
        You can calculate your fare by clicking{" "}
        <a href="https://www.lta.gov.sg/content/ltagov/en/map/fare-calculator.html">
          here
        </a>
      </p>
      <hr />
    </>
  );
}
