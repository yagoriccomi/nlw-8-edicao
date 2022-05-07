import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const creatFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: creatFeedbackSpy },
  { sendMail: sendMailSpy },
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'exemple comment',
      screenshot: 'data:image/png;base64,est.jpg',
    })).resolves.not.toThrow()
    
    expect(creatFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'exemple comment',
      screenshot: 'data:image/png;base64,est.jpg',
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'OTHER',
      comment: '',
      screenshot: 'data:image/png;base64,est.jpg',
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'OTHER',
      comment: 'exemple comment',
      screenshot: 'test.jpg',
    })).rejects.toThrow()
  })
})