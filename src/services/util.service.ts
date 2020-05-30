export function setMenuItemStatus(element: any, listOfElements: any): void {
    if (listOfElements) {
        listOfElements.forEach((listElement: any) => {
            if (element !== listElement) {
                listElement.style.backgroundColor = 'black'
            } else
                listElement.style.backgroundColor = '#d9d9d9'
        });
    } else listOfElements = []
}