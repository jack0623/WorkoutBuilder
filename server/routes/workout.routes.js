import express from 'express'
import workoutCtrl from '../controllers/workout.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/workouts')
  .post(workoutCtrl.create)

router.route('/api/workouts/:userId')
  .get(authCtrl.requireSignin,workoutCtrl.list)

router.route('/api/workouts/:workoutId')
  .put(authCtrl.requireSignin,workoutCtrl.update)
  .delete(authCtrl.requireSignin,workoutCtrl.remove)

router.route('/api/workout/:workoutId')
  .get(authCtrl.requireSignin, workoutCtrl.read)

router.param('workoutId', workoutCtrl.workoutByID)
router.param('userId', workoutCtrl.list)

export default router