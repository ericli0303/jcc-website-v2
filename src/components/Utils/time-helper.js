export const isDay = () => {
    const clientTime = new Date();
    if (8 <= clientTime.getHours() && clientTime.getHours() < 20) {
        return true;
    }
    return false;
}
