namespace backend.Models
{
    public enum RegisterResult
    {
        Success,
        UnknownError,
        AccountWithEmailAlreadyExists,
        AccountWithNicknameAlreadyExists,
        WrongEmail,
        WrongPassword,
        WrongNickname,
        PasswordsNotSame
    }
}
