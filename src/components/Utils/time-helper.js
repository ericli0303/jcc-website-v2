export const isDay = () => {
    const clientTime = new Date();
    console.log(clientTime.toLocaleString());
    if (8 <= clientTime.getHours() && clientTime.getHours() < 20) {
        return true;
    }
    return false;
}
