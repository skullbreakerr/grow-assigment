export const Fetcher = async (url: RequestInfo | URL) => {
    let responseObject = { errorMessage: '', data: [] };
    try {
        // if(!response.ok){
        //   throw new Error(`HTTP error: ${response.status}`);
        // }
        const response = await fetch(url);
        const responseData = await response.json();
        responseObject.errorMessage = '';
        responseObject.data = responseData;
    }
    catch (error) {
        responseObject.errorMessage = JSON.stringify(error);
    }
    return responseObject;
}
 