export interface IPage<T> {
    data: T,
    message: string,
    page?: {
        pageNumber: number,
        pageSize: number,
        totalElements: number,
        totalPages: number
    }
    success: boolean
}