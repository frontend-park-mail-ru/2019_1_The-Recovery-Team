export function formatDate(created) {
    const monthNames = [
        "Января", "Февраля", "Марта",
        "Апреля", "Мая", "Июня", "Июля",
        "Августа", "Сентября", "Октября",
        "Ноября", "Декабря"
    ];
    const date = new Date(created);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const now = new Date();
    const minutesFormat = minutes.toString().length === 1 ? `0${minutes}` : minutes;


    if (year !== now.getFullYear() && monthIndex !== now.getMonth() && day !== now.getDate()) {
        return `${day} ${monthNames[monthIndex]} ${year} ${hours}:${minutesFormat}`
    }

    if (year === now.getFullYear() && monthIndex !== now.getMonth() && day !== now.getDate()) {
        return `${day} ${monthNames[monthIndex]} ${hours}:${minutesFormat}`
    }

    if (year === now.getFullYear() && monthIndex === now.getMonth() && day !== now.getDate()) {
        return `${day} ${monthNames[monthIndex]} ${hours}:${minutesFormat}`
    }

    return `${hours}:${minutesFormat}`
}
