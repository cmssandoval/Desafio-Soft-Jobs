const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
};

const actualDateAndTime = new Date(Date.now())
    .toLocaleDateString('es-ES', dateOptions);

export default actualDateAndTime;