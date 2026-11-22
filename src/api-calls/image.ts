export const getImages = async () => {
    try {
        const res = await fetch(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_ACCESS_KEY}`) 
        if(!res.ok)throw new Error("Images api call status not 200");
        const data = await res.json()
    } catch (error) {
        console.error(`Images cannot be fetched: ${error}`);
        
    }
   
}