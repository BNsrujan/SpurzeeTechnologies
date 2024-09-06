export async function getServerSideProps() {
    // Fetch dynamic data from an API
    const usIndices = await fetch("API_URL_FOR_US_INDICES").then(res => res.json());
    const europeanIndices = await fetch("API_URL_FOR_EUROPEAN_INDICES").then(res => res.json());
    const asianIndices = await fetch("API_URL_FOR_ASIAN_INDICES").then(res => res.json());
  
    return {
      props: {
        usIndices,
        europeanIndices,
        asianIndices,
      },
    };
  }
  