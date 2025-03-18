export const addStyleToElement = (element: any, style: string) => {
    const existingStyle = (element as HTMLElement).getAttribute('style');
    if (existingStyle) {
        const splitted = existingStyle?.split(';');
        splitted.push(style);
        element.setAttribute('style', splitted.join(';'));
    } else {
        element.setAttribute('style', style);
    }
};
