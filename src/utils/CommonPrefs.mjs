let currentPage = null;

export function setCurrentPage(page) {
    currentPage = page;
}

export function getCurrentPage() {
    return currentPage.toLocaleLowerCase();
}
