/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Grant creation request.
 */
export declare class Create extends Class.Null {
    /**
     * Target Id.
     */
    targetId: string;
    /**
     * Lits of profiles.
     */
    profilesIdList: string[];
    /**
     * List of roles.
     */
    rolesIdList: string[];
    /**
     * Grant type.
     */
    type: Types.Common;
    /**
     * Grant name.
     */
    name?: string;
}
