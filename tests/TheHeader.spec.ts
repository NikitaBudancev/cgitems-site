// tests/HelloWorld.spec.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import TheHeader from '../components/TheHeader.vue';

describe('TheHeader', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(TheHeader);
    expect(wrapper.vm).toBeTruthy();
  });
});
