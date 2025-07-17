import { useState } from 'react'
import Button from './components/Button.jsx'
import ButtonGroup from './components/ButtonGroup.jsx'

export default function App() {
  const [isPrimaryLoading, setIsPrimaryLoading] = useState(false)
  const [isSecondary, setIsSecondary] = useState(false)
  const [isDanger, setIsDanger] = useState(false)
  return (
    <ButtonGroup direction="horizontal">
      <Button
        variant="secondary"
        loading={isSecondary}
        onClick={function () {
          setIsSecondary(!isSecondary)
        }}>
        취소
      </Button>
      <Button
        variant="primary"
        width={100}
        loading={isPrimaryLoading}
        onClick={function () {
          setIsPrimaryLoading(!isPrimaryLoading)
        }}>
        저장
      </Button>
      <Button
        variant="danger"
        width={70}
        loading={isDanger}
        onClick={function () {
          setIsDanger(!isDanger)
        }}>
        삭제
      </Button>
    </ButtonGroup>
  )
}
