const API_BASE = "https://osu-api.paraliyzed.net/api"
//Alternate API (if main API is down...)
//https://phubahosi.up.railway.app/api
//https://sonataaltapi.vercel.app/api

export async function getUserDataSet(id, mode) {
    try {
        return (
            await axios.get(`${API_BASE}/users/${id}?mode=${mode}`, {
                baseURL: API_BASE,
            })
        )["data"];
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function postCustomID(id) {
    try {
        let ColorData = null;
        const response = await axios.get(`${API_BASE}/color/customid/${id}/postimg`);
        ColorData = response.data;
        return ColorData ? ColorData : { error: true };
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function postDefaultID(id) {
    try {
        let ColorData = null;
        const response = await axios.get(`${API_BASE}/color/default/${id}`);
        ColorData = response.data;
        return ColorData ? ColorData : { error: true };
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function getMapScores(beatmapID, mode) {
    try {
        const data = (
            await axios.get(`v1/beatmaps/scores/${beatmapID}?mode=${mode}`, {
                baseURL: API_BASE,
            })
        )["data"];
        return data.length !== 0 ? data : null;
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function getMapDataSet(beatmapID) {
    try {
        return (
            await axios.get(`/beatmaps/${beatmapID}`, {
                baseURL: API_BASE,
            })
        )["data"];
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function getModsScores(beatmapID, modName, mode) {
    try {
        const response = await axios.get(`v1/beatmaps/scores/${beatmapID}?mods=${modName}&mode=${mode}`, {
            baseURL: API_BASE,
        });
        return response.data.length !== 0 ? response.data : null;
    } catch (error) {
        console.error(error);
        return null;
    }
}