/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Grant update request.
 */
@RestDB.Schema.Entity('grants/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Lits of profiles.
   */
  @RestDB.Schema.Array(String)
  @Class.Public()
  public profilesIdList?: string[];

  /**
   * List of roles.
   */
  @RestDB.Schema.Array(String)
  @Class.Public()
  public rolesIdList?: string[];

  /**
   * Grant name.
   */
  @Class.Public()
  public name?: string;
}
