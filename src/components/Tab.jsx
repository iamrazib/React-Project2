export default function Tab() {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="SixtyDomeMosque"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex justify-center space-x-4 ">
            <img
              src="/public/Sixty_Dome_Mosque_Bagerhat.jpg"
              width={"400px"}
              height={"400px"}
            />
          </div>
          <div className="flex justify-center space-x-4 ">
            The Sixty Dome Mosque (Bengali: Shat Gombuj Moshjid; more commonly
            known as Shait Gambuj Mosque or Saith Gunbad Masjid), <br />
            is a mosque in Bagerhat, Bangladesh. It is a part of the Mosque City
            of Bagerhat, a UNESCO World Heritage Site. <br />
            It is the largest mosque in Bangladesh from the sultanate period
            (1352~1576). <br />
            It was built during the Bengal Sultanate by Khan Jahan Ali, the
            governor of the Sundarbans. <br />
            It has been described as "one of the most impressive Muslim
            monuments in the whole of South Asia.
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Khan_Jahan_Ali_Bridge"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex justify-center space-x-4 ">
            <img
              src="/public/Rupsha_bridge1.jpg"
              width={"400px"}
              height={"300px"}
            />
            <img
              src="/public/Rupsha_bridge2.jpg"
              width={"400px"}
              height={"300px"}
            />
          </div>
          Khan Jahan Ali Bridge is a bridge over Rupsa River in Khulna,
          Bangladesh and named after Khan Jahan Ali. <br />
          The bridge is also known as Rupsa bridge.
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Port_of_Mongla"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex justify-center space-x-4 ">
            <img
              src="/public/Port-of-Mongla.png"
              width={"400px"}
              height={"300px"}
            />
          </div>
          The Port of Mongla is a link sea port, located at Mongla Upazila,
          Khulna Division, Bangladesh. <br />
          It is a sea port of Khulna city which is located near to the north. It
          is the second largest and second busiest seaport of Bangladesh. <br />
          Mongla port lies close to the shore of Bay of Bengal and Pashur river.
        </div>
      </div>
    </div>
  );
}
