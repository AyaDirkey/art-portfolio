export class AppLink {
    static readonly host: string = "http://localhost:8000";
    static readonly server: string = `${this.host}/api`;
    static readonly images: string = `${this.host}/storage`;

    //awards
    static readonly get_awards: string = `${this.host}/amer-alkhatib/awards`;
    static readonly award_show: string = `${this.host}/amer-alkhatib/award-show`;
    static readonly award_search: string = `${this.host}/amer-alkhatib/award-search`;
    static readonly award_store: string = `${this.host}/amer-alkhatib/award-store`;
    static readonly award_update: string = `${this.host}/amer-alkhatib/award-update`;
    static readonly award_destroy: string = `${this.host}/amer-alkhatib/award-destroy`;
    
    //contact
    static readonly get_contacts: string = `${this.host}/amer-alkhatib/contacts`;
    static readonly contact_store: string = `${this.host}/amer-alkhatib/contact-store`;
    static readonly update_contact: string = `${this.host}/amer-alkhatib/contact-update`;

    //cv
    static readonly get_cv: string = `${this.host}/amer-alkhatib/cv`;
    static readonly cv_store: string = `${this.host}/amer-alkhatib/cv-store`;
    static readonly cv_update: string = `${this.host}/amer-alkhatib/cv-update`;

    //pictures
    static readonly get_pictures: string = `${this.host}/amer-alkhatib/pictures`;
    static readonly picture_show: string = `${this.host}/amer-alkhatib/picture-show`;
    static readonly picture_search: string = `${this.host}/amer-alkhatib/picture-search`;
    static readonly picture_store: string = `${this.host}/amer-alkhatib/picture-store`;
    static readonly picture_update: string = `${this.host}/amer-alkhatib/picture-update`;
    static readonly picture_destroy: string = `${this.host}/amer-alkhatib/picture-destroy`;

    //auth
    static readonly login: string = `${this.host}/amer-alkhatib/login`;
    static readonly logout: string = `${this.host}/amer-alkhatib/logout`;
}
