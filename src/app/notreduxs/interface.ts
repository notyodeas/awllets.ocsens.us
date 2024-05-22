
export interface isidpatches<T> {
    type: string;
    payload?: T;
}
export interface inotprops<T> {
    payload?: T;
}

export interface ibaseseftches {
    waseseftches: boolean;
    waseseftcheserrors: boolean;
    waseseftchessuccesses: boolean;
}
export interface inotkeys {
    publicaClavis: string;
    privatusClavis: string;
}

export enum atstus {
    known,
    included,
    awits,
    excluded
}
export interface iaststuserrors {
    included: boolean;
    ircspt: any;
}
export interface iceiveds {
    froms: string;
    notpod: string;
    notfixums: boolean;
}
export interface iceivedserrorsoutstrue {
    liber: boolean;
    identitatis: string;
}
export interface iceivedserrorsoutsfalse {
    notlibers: boolean;
    notidentitatises: string;
}
export interface istateraoutstrue {
    liber: number;
    fixum: number;
}
export interface iatsteraoutsfalse {
    notliber: number;
    notfixum: number;
}
export interface iilmits {
    ilmits: iatsteraoutsfalse;
    notblocksunhash: string[];
}
export interface iweaponsouttrue {
    probationem: string;
    'summa-bid-notliber': number;
    'summa-bid-notfixum': number;
    'obstructionum-arma': {
        defensio: string[],
        impetus: string[]
    }
}

export interface inotweaponsoutfalse {
    defenceds: string[];
    attackeds: string[];
    lowestnotbidsnotlibers: number;
    lowestnotbidsnotfixums: number;
}
interface inotweaponnotweapons {
    exemplar: string;
    telum: string[];
    probationem: string;
    bigas: number;
    vos: number;
        
}
export interface inotweaponreq {
    "basis-defensio": string;
    "basis-impetum": string;
    "gladiator-defensiones-liber": inotweaponnotweapons[];
    "gladiator-defensiones-fixum": inotweaponnotweapons[];
    "gladiator-impetus-liber": inotweaponnotweapons[];
    "gladiator-impetus-fixum": inotweaponnotweapons[];
}
export interface inotweaponrequest {
    basisdefensio: string;
    basisimpetum: string;
    gladiatordefensionesliber: inotweaponnotweapons[];
    gladiatordefensionesfixum: inotweaponnotweapons[];
    gladiatorimpetusliber: inotweaponnotweapons[];
    gladiatorimpetusfixum: inotweaponnotweapons[];
}
export interface ierceivedseftches {
    notfixum: boolean;
    maounts: number;
    froms: string;
}
export interface ierceipts {
    "si-remotionem-input": null,
    "si-remotionem-output": {
        liber: boolean;
        habereIus: string;
        debetur: string;
        transactioIdentitatis: string;
        pod: number;
    }
    "siganture-interiore-si-remotionem": string;
    nonce: string;
}