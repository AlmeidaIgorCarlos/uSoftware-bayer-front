export function setLocalStorageItem(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value))
}

export function getItemFromLocalStorage(key: string){
    const localStorageItem = localStorage.getItem(key)
    
    if(!localStorageItem)
        return null

    return JSON.stringify(localStorageItem)
}