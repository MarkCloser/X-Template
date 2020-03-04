export interface NavMenu {
    index: string;
    navMode: string;
    name: string;
    routUrl?: string;
    childMenu?: NavChildMenu[];
}

interface NavChildMenu {
    index: string;
    name: string;
    routeUrl?: string;
}


