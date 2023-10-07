import React from 'react';

export default function Constraints() {
  return (
    <div className="my-5 text-sm">
      <div className="text-white text-sm font-medium">Constraints:</div>
      <ul className="text-white ml-5 list-disc">
        <li className="mt-2">
          <code>2 ≤ nums.length ≤ 10</code>
        </li>

        <li className="mt-2">
          <code>-10 ≤ nums[i] ≤ 10</code>
        </li>
        <li className="mt-2">
          <code>-10 ≤ target ≤ 10</code>
        </li>
        <li className="mt-2 text-sm">
          <strong>Only one valid answer exists.</strong>
        </li>
      </ul>
    </div>
  );
}
