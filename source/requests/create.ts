/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Grant creation request.
 */
@RestDB.Schema.Entity('grants')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * Target Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public targetId!: string;

  /**
   * Lits of profiles.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public profilesIdList!: string[];

  /**
   * List of roles.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public rolesIdList!: string[];

  /**
   * Grant type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Common))
  @Class.Public()
  public type!: Types.Common;

  /**
   * Grant name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;
}
