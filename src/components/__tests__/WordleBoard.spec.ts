import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { DEFEAT_MESSAGE, VICTORY_MESSAGE } from '@/settings'

describe('WordleBoard', () => {
  const wordOfTheDay = 'TESTS'
  test('a victory message appears when the user makes a guess that matches the word of the day', async () => {
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay } })

    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue(wordOfTheDay)
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })

  test('a defeat message appears if the user makes a guess that is incorrect', async () => {
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay } })

    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue('WRONG')
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain(DEFEAT_MESSAGE)
  })
  test.todo('no end-of-game message appears if the user has not yet made a guess')
})
