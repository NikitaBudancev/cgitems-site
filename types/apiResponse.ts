interface ApiResponse<T = null> {
  result: T;
  success: boolean;
  status: number;
}
