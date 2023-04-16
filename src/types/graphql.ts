
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum DtmName {
    SYSTEM = "SYSTEM",
    DISCIPLINE = "DISCIPLINE",
    FACILITY = "FACILITY",
    FUNCTION_CODE = "FUNCTION_CODE",
    AREA_CODE = "AREA_CODE",
    PROCUREMENT_PACKAGE = "PROCUREMENT_PACKAGE",
    VOIDED = "VOIDED",
    DELETED = "DELETED",
    UNKNOWN = "UNKNOWN"
}

export interface AttributeSummaryFilter {
    count?: Nullable<number>;
    dtmName_in: DtmName[];
}

export interface ItemAttribute {
    id: string;
    type: string;
    value: string;
    dtmName?: Nullable<DtmName>;
    nonConformanceInfo?: Nullable<NonConformanceInfo>;
    code?: Nullable<string>;
}

export interface NonConformanceInfo {
    nonConformantProperty?: Nullable<string>;
    nonConformantValue?: Nullable<string>;
    description?: Nullable<string>;
    type?: Nullable<string>;
    maturityLevel?: Nullable<string>;
    foundOn?: Nullable<string>;
}

export interface TagSummary {
    id: number;
    tagNumber: string;
    description: string;
    attributes?: Nullable<ItemAttribute[]>;
}

export interface IQuery {
    tagSummary(itemId: string): Nullable<TagSummary> | Promise<Nullable<TagSummary>>;
}

type Nullable<T> = T | null;
