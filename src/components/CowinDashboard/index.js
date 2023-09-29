import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'

import VaccinationByGender from '../VaccinationByGender'

import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'PROGRESS',
}

class CowinDashBoard extends Component {
  state = {dashBoardData: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getDashBoardData()
  }

  getDashBoardData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const formattedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      console.log(formattedData)
      this.setState({
        dashBoardData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {dashBoardData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = dashBoardData
    return (
      <div className="dash-board-container">
        <div className="recharts-container">
          <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
          <VaccinationByGender vaccinationByGender={vaccinationByGender} />
          <VaccinationByAge vaccinationByAge={vaccinationByAge} />
        </div>
      </div>
    )
  }

  renderFailureView = () => (
    <div className="dash-board-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="heading2">Something went wrong</h1>
    </div>
  )

  renderLoader = () => (
    <div data-testid="loader" className="dash-board-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="dash-board-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="image"
          />
          <h1 className="heading">Co-WIN</h1>
        </div>
        <h1 className="heading2">CoWIN Vaccination In India</h1>

        {this.renderFinalView()}
      </div>
    )
  }
}

export default CowinDashBoard
