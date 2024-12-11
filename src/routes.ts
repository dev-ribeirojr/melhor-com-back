import { Router } from 'express'
import {
  CreatePhoneController,
  DeletePhoneController,
  FindAllPhoneController,
  FindPhoneByIdController,
  UpdatePhoneController,
} from './controllers'

const router = Router()

router.post('/phone', new CreatePhoneController().handle)

router.get('/phone', new FindAllPhoneController().handle)

router.get('/phone/:productId', new FindPhoneByIdController().handle)

router.delete('/phone/:productId', new DeletePhoneController().handle)

router.put('/phone/:productId', new UpdatePhoneController().handle)

export { router }
