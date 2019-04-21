/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from './types';
import * as ApiProfiles from '@juridoc/client-profiles';
/**
 * Grants entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Grant Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Profile entity.
     */
    profile: ApiProfiles.Entity;
    /**
     * Target Id.
     */
    targetId: string;
    /**
     * List of profiles.
     */
    profilesIdList: string[];
    /**
     * Profile entity.
     */
    profilesList: ApiProfiles.Entity[];
    /**
     * List of roles.
     */
    rolesIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Last update date.
     */
    updatedAt?: Date;
    /**
     * Grant type.
     */
    type: Types.System | Types.Common;
    /**
     * Grant name.
     */
    name?: string;
}
