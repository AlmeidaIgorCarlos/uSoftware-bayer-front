export function setLocalStorageItem(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value))
}

export function getItemFromLocalStorage(key: string){
    const localStorageItem = localStorage.getItem(key)
    return JSON.stringify(localStorageItem)
}