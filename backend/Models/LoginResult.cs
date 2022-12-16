namespace backend.Models
{
    public enum LoginResult
    {
        Success,
        SuccessShouldUpdatePassword,
        UnknownError,
        AccountNotFound,
        WrongPassword
    }
}
