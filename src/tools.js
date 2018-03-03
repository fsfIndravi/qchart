export function getMinMax(arr) {
    let min, max;
    min = max = arr[0][1];
    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i][1]);
        max = Math.max(max, arr[i][1]);
    }

    return { min, max };
}

export function getMinMaxForSomeSeries(series) {
    const firstMinMax = getMinMax(series[0].data);
    let
        min = firstMinMax.min,
        max = firstMinMax.max;

    if (series.length > 1) {
        for (let i = 0; i < series.length; i++) {
            let minMax = getMinMax(series[i].data);
            min = Math.min(minMax.min, min);
            max = Math.max(minMax.max, max);
        }
    }

    return { min, max };
}

function setStyleForElem(dom, propertyName, propertyValue) {
    if (typeof propertyValue === 'number') {
        propertyValue += 'px';
    }

    dom.style[propertyName] = propertyValue;
}

export function setStyle(dom, propertyName, propertyValue) {
    if (typeof propertyName === 'object') {
        Object.keys(propertyName).forEach(function(key) {
            setStyleForElem(dom, key, propertyName[key]);
        });
    } else {
        setStyleForElem(dom, propertyName, propertyValue);
    }
}
