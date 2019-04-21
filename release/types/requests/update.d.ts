/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Grant update request.
 */
export declare class Update extends Class.Null {
    /**
     * Lits of profiles.
     */
    profilesIdList?: string[];
    /**
     * List of roles.
     */
    rolesIdList?: string[];
    /**
     * Grant name.
     */
    name?: string;
}
