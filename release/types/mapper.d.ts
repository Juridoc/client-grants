/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Grants mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new grant based on the specified creation request.
     * @param request Grant creation request.
     * @returns Returns a promise to get the grant Id.
     * @throws Throws an error when the grant wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the grant that corresponds to the specified grant Id.
     * @param id Grant Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the grant entity.
     * @throws Throws an error when the grant wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Update the grant that corresponds to the specified grant Id based on the given update request.
     * @param id Grant Id.
     * @param request Grant update request.
     * @returns Returns a promise to get true when the grant was updated, false otherwise.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * List all grants that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the grant list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all grants that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of grants or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the grant that corresponds to the specified grant Id.
     * @param id Grant Id.
     * @returns Returns a promise to get true when the grant was deleted, false otherwise.
     */
    remove(id: string): Promise<boolean>;
}
