export function setMenuItemStatus(element: any, listOfElements: any): void {
    const elementNodeChild = element.childNodes[element.childNodes.length - 1]
    if (listOfElements) {
        listOfElements.forEach((listElement: any) => {
            const listElementNodeChild = listElement.childNodes[element.childNodes.length - 1]
            if (elementNodeChild !== listElementNodeChild) {
                listElementNodeChild.style.backgroundColor = 'black'
            } else
                listElementNodeChild.style.backgroundColor = '#d9d9d9'
        });
    } else listOfElements = []
}