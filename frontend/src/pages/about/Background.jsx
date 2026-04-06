import aboutImg from "../../assets/images/aboutus.jpg";

function Background() {
  return (
    <div>

      {/* 🖼️ IMAGE */}
      <div className="mb-6">
        <img
          src={aboutImg}
          alt="St Joseph College"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow"
        />
      </div>

      {/* 📌 TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
        Background
      </h2>

      {/* 📄 CONTENT */}
      <div className="space-y-4 text-gray-700 leading-relaxed">

        <p>
          St Joseph’s College of Health Sciences formerly known as St Joseph’s
          College of Nursing and Midwifery was founded by the Roman Catholic
          Church under the Archdiocese of Blantyre in the early 1950s. The College
          is found in Chiradzulu district in the Southern Region of Malawi. It is
          25kms away from Blantyre city and travellers use Robert Mugabe Road
          formally known as Midima Road and then turn off to Nguludi.
        </p>

        <p>
          The College makes borders with five villages known as Mwenye, Mpira,
          Herbert, Ntonya and Tapala at a place known as Nguludi Mission. The
          College is situated near St. Joseph’s Mission Hospital.
        </p>

        <p>
          The College operates under the Christian Health Association of Malawi
          (CHAM) which is the umbrella body for all Christian health units in
          Malawi. The proprietor for the College is the Archbishop of the
          Archdiocese of Blantyre. The College Principal is the head of the
          institution and the Archbishop appoints a Board of Directors to give
          guidance to College management in its day to day operations.
        </p>

        <p>
          The College is registered by the Nurses and Midwives Council of Malawi
          (NMCM) under the Nurses Act which was passed in Parliament in 1966.
          Since its inception, the College has trained 4,900 Enrolled Nurses and
          Midwives, 2,109 Nursing and Midwifery Technicians and 160 Community
          Midwifery Assistants.
        </p>

      </div>

    </div>
  );
}

export default Background;