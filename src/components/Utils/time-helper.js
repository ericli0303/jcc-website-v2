import React from 'react';

export const isDay = () => {
    const clientTime = new Date();
    if (8 <= clientTime.getHours() && clientTime.getHours() < 24) {
        return true;
    }
    return false;
}