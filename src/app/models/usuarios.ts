import { Idiomas } from './idiomas';
import { Estados } from './estados';
import { Roles } from './roles';


export class Usuarios {
    id: number;
    usua: string;
    pass: string;
    emai: string;
    nomb: string;
    apel: string;
    idio: Idiomas;
    esta: Estados;
    perf: Roles[];
    fech_crea: Date;
    usua_modi?: string;
    fech_modi?: Date;
}
