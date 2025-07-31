import { visitor_api_Url } from "../creds";

export const fetchFeatureData = async () => {
    try {
      const response = await fetch('../data/features-properties.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

export const fetchPropertyData = async () => {
    try {
      const response = await fetch('../data/properties.json');
      return await response.json();
       ;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
}

export const fetchPropertyDetailData = async (property_name) => {
    try {
      const response = await fetch(`../data/property_details/${property_name}.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
}

export const fetchBuilderLogo = async () =>{
  try{
    const response = await fetch(`../data/builderList.json`);
    const data = await response.json();
    return data;
  }
  catch(error){
    console.error('Error Fetching Builder List', error);
    return null;
  }
}
export const trackVisitor = async (page_name) => {
  try {
    const response = await fetch(visitor_api_Url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ project_name: `keyonprop.com/${page_name}` , timestamp: new Date().toISOString()}),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return null;
  }
}